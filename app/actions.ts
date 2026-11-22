'use server'

export type EnquiryState = {
  status: 'idle' | 'success' | 'error'
  message?: string
  errors?: Partial<Record<'name' | 'phone' | 'email' | 'location' | 'interest' | 'budget', string>>
}

const clean = (v: FormDataEntryValue | null) => (typeof v === 'string' ? v.trim().slice(0, 200) : '')

export async function submitEnquiry(_prev: EnquiryState, formData: FormData): Promise<EnquiryState> {
  const name = clean(formData.get('name'))
  const phone = clean(formData.get('phone')).replace(/[\s-]/g, '')
  const email = clean(formData.get('email'))
  const location = clean(formData.get('location'))
  const interest = clean(formData.get('interest'))
  const budget = clean(formData.get('budget'))

  const errors: EnquiryState['errors'] = {}
  if (name.length < 2) errors.name = 'Please enter your full name.'
  if (!/^(\+91)?[6-9]\d{9}$/.test(phone)) errors.phone = 'Enter a valid 10-digit Indian mobile number.'
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = 'Enter a valid email address.'
  if (!location) errors.location = 'Select a preferred location.'
  if (!interest) errors.interest = 'Select a property interest.'
  if (!budget) errors.budget = 'Select a budget range.'

  if (Object.keys(errors).length) {
    return { status: 'error', message: 'Please review the highlighted fields.', errors }
  }

  return {
    status: 'success',
    message: `Thank you, ${name.split(' ')[0]}. An advisor will call you on ${phone} within one working day.`,
  }
}
