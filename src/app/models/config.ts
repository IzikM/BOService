export interface AServer {
  id?: string;
  name?: string;
  type?: string;
}

export interface APage {
  name?: string;
  route?: string;
  groups?: string[];
  serverType?: string;
}

export interface AMenuItem {
  name?: string;
}

export interface AServerList {
  servers: AServer[];
}

export interface APageList {
  pages: APage[];
}

export interface AMenuItemList {
  menuItem: AMenuItem[];
}

export interface Config {
  debugLevel?: string;
  server?: AServer;
  servers?: AServerList;
  pages?: APageList;
  menuItems?: AMenuItemList;
}

export interface AString {
  aString: string;
}
