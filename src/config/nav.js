export const PATHS = {
  root: '/',
  books: '/books',
  cart: '/cart',
}

export const LINKS = [
  { to: PATHS.root, label: 'Accueil', isMain: false },
  { to: PATHS.books, label: 'Découvrez les livres', isMain: true },
  { to: PATHS.cart, label: 'Mon Panier', isMain: true },
]
