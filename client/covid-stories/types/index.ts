interface NavItem {
	 readonly label: string,
	 readonly route: string
}

export interface NavItems extends Array<NavItem> {}
