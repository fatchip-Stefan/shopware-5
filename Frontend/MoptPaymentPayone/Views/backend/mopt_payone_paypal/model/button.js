Ext.define('Shopware.apps.MoptPayonePaypal.model.Button', {
    extend: 'Shopware.data.Model',
    configure: function () {
        return {
            controller: 'MoptPayonePaypal',
            detail: 'Shopware.apps.MoptPayonePaypal.view.detail.Button'
        };
    },
 
    fields: [
        { name: 'id', type: 'int', useNull: true},
        { name: 'shopId', type: 'int' },
        { name: 'localeId', type: 'int' },
        { name: 'packStationMode', type: 'string' },
        { name: 'image', type: 'string'},
        { name: 'isDefault', type: 'boolean'}
    ],
    
    associations: [
        {
            relation: 'ManyToOne',
            field: 'localeId',
            
            type: 'hasMany',
            model: 'Shopware.apps.Base.model.Locale',
            name: 'getLocale',
            associationKey: 'locale'
        },
        {
            relation: 'ManyToOne',
            field: 'shopId',

            type: 'hasMany',
            model: 'Shopware.apps.Base.model.Shop',
            name: 'getShop',
            associationKey: 'shop'
        }
        ]
});
 
