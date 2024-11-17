/**
Pipe ==> Left to right calculation

[emptyCart, buyItem, applyTaxToItems, addItemToCart] 

In Reduce Method (f, g) => g(f(…args))
1. () => buyItem(emptyCart(…args))
2. () => applyTaxToItems(buyItem(emptyCart(…args)))
3. () => addItemToCart(applyTaxToItems(buyItem(emptyCart(…args))))

Compose ==> Right to left calculation

In Reduce Method (f, g) => f(g(…args))

[emptyCart, buyItem, applyTaxToItems, addItemToCart] 
1. () => emptyCart(buyItem(…args))
2. () => emptyCart(buyItem(applyTaxToItems(…args)))
3. () => emptyCart(buyItem(applyTaxToItems(addItemToCart(…args))))
**/

const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: []
  }
  const amazonHistory = []
  const compose = (f, g) => (...args) => f(g(...args))
  purchaseItem(
    emptyCart,
    buyItem,
    applyTaxToItems,
    addItemToCart
  )(user, {name: 'laptop', price: 200})

  function purchaseItem(...fns) {
    return fns.reduce(compose)
  }

  function addItemToCart(user, item) {
    amazonHistory.push(user)
    const updateCart = user.cart.concat(item)
    return Object.assign({}, user, { cart: updateCart })
  }

  function applyTaxToItems(user) {
    amazonHistory.push(user)
    const {cart} = user;
    const taxRate = 1.3;
    const updatedCart = cart.map(item => {
      return {
        name: item,
        price: item.price*taxRate
      }
    })
    return Object.assign({}, user, { cart: updatedCart })
  }

  function buyItem(user) {
    amazonHistory.push(user)
    return Object.assign({}, user, {purchases: user.cart})
  }

  function emptyCart(user) {
    amazonHistory.push(user)
    return Object.assign({}, user, {cart: []})
  }
