export default class Realm {
    id: number;
    connected_realm_id: number;
    name: string;
    alt_name: string;
    slug: string;
    alt_slug: string;
    locale: string;
    language: string;
    is_connected: boolean;

    static fromConnectRealmApi(json) {
        if (json.connectRealms > 1) {
            connectedRealm.id = json.id;
            connectedRealm.is_connected = (json.connectedRealms.length > 1)
            connectedRealm.connected_realm_id = (json.connectedRealmId) ? json.connectedRealmId : (json.connectedRealms.length > 1) ? json.id : null;
            return json.connectRealms.map((connectedRealm) => {

                return Realm.fromApi(connectedRealm)
            })
        }
    }

    static fromApi(json) {

        const realm = new Realm();


        realm.name = json.name;
        realm.alt_name = json.altName;
        realm.slug = json.slug;
        realm.alt_slug = json.altSlug;
        realm.locale = json.locale;
        realm.language = json.language;
        realm.is_connected = json.isConnected;
        return realm;
    }
}
