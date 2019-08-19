Ext.define('Shopware.apps.MoptPayonePayDirekt.view.detail.Button', {
    extend: 'Shopware.model.Container',
    padding: 20,
    configure: function () {
        var me = this;
        /** global: Ext */

        return {
            controller: 'MoptPayonePayDirekt',
            fieldSets: [{
                    title: '{s name=details/title}Payone Pay Direkt Button-Details{/s}',
                    layout: 'fit',
                    fields: {
                        localeId: {
                            fieldLabel: '{s name=localeId}localeId{/s}',
                            name: 'localeId',
                            allowBlank: false
                        },
                        image: {
                            fieldLabel: '{s name=image}Pay Direkt image{/s}',
                            xtype: 'mediaselectionfield',
                            allowBlank: false
                        }
                    }
                }]
        };
    }
});
             