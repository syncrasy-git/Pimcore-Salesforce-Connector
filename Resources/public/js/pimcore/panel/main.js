pimcore.registerNS("pimcore.plugin.SyncrasyPimcoreSalesforceBundle.panel.main");
pimcore.plugin.SyncrasyPimcoreSalesforceBundle.panel.main = Class.create({
    initialize: function (config) {
        config = defaultValue(config, {});
        const letfPanel = new pimcore.plugin.SyncrasyPimcoreSalesforceBundle.panel.mappingLeftPanel();
        if (!this.panel) {
        this.panel = new Ext.TabPanel({
            title: t("plugin_psc"),
            closable: true,
            deferredRender: false,
            forceLayout: true,
            activeTab: 0,
            id: "pimcore_plugin_psc_panel",
            iconCls: "plugin_pmicon_header",
            items: [letfPanel.getTabPanel()]
        });

        var tabPanel = Ext.getCmp("pimcore_panel_tabs");
        tabPanel.add(this.panel);
        tabPanel.setActiveItem("pimcore_plugin_psc_panel");

        this.panel.on("destroy", function () {
            pimcore.globalmanager.remove("plugin_psc_cnf");
        }.bind(this));

        if (config.activeTab) {
            this.panel.setActiveTab(config.activeTab);
        }

        pimcore.layout.refresh();

    }
    return this.panel;
    }
});