interface NavItem {
   readonly label: string,
   readonly route: string
}

export interface NavItems extends Array<NavItem> {}

export interface Post {
  userId: Number,
  id: Number,
  title: string,
  body: string
}
