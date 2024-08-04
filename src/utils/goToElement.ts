export default function goToElement(elementId: any) {
  const element = document.querySelector(elementId)
  element?.scrollIntoView({ behavior: "smooth" })
}
