export default function formatPrice (price) {
  /*
    Utilities for price formatting by putting commas after three digits

    Args:
      - price (String)

    Return:
      - formatted price (String)
  */
  return price.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
}
