export const handleBookingAction = (source: string = 'unknown') => {
  console.log(`${source} Book Now clicked`)
  
  const wantsToCall = confirm(
    'Ready to book your appointment?\n\nOnline booking is coming soon. Would you like to call us now or see our contact information?'
  )
  
  if (wantsToCall) {
    window.location.href = phoneHref
  } else {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
}

export const handleDirectCall = (source: string = 'unknown') => {
  console.log(`${source} call button clicked`)
  window.location.href = phoneHref
}

export const phoneHref = 'tel:+18135505858'
export const phoneE164 = '+18135505858'
export const displayPhoneNumber = '(813) 550-5858'