Ext.define('mobndf.view.Ndfs', {
  extend: 'Ext.List',
  requires: [
    'mobndf.model.Ndf'
  ],
  xtype: 'ndfs',
  config: {
    // layout: 'fit',
    scrollable: true,
    cls:'dataview-inline ndfs',
    // itemTpl: new Ext.XTemplate('<div class="title"><span class="main">{type}</span><tpl if="(status!=1)&&(status!=2)&&(status!=3)&&(status!=4)&&(status!=5)"><span class="other"></tpl><tpl if="status==1"><span class="avalider"></tpl><tpl if="status==2"><span class="valide"></tpl><tpl if="status==3"><span class="comptabilise"></tpl><tpl if="status==4"><span class="regle"></tpl><tpl if="status==5"><span class="refuse"></tpl>{statusString}</span></div><div class="subtitle"><span class="title-left">{firstname} {name}</span><span class="title-right">{amount} {currency}</span></div><div class="bottom"><span class="bottom-left">{date:date("j M, Y")}</span>'),
    // itemTpl: new Ext.XTemplate(
    //     '<div class="title">',
    //       '<span class="main">{firstname} {name}</span>',
    //       '<span class="title-right">{amount} {currency}</span>',
    //     '</div>',
    //     '<div class="subtitle">',
    //       '<span class="title-left">{type}</span>',
    //       '<tpl if="(status!=1)&&(status!=2)&&(status!=3)&&(status!=4)&&(status!=5)"><span class="status other"></tpl>',
    //       '<tpl if="status==1"><span class="status avalider"></tpl>',
    //       '<tpl if="status==2"><span class="status valide"></tpl>',
    //       '<tpl if="status==3"><span class="status comptabilise"></tpl>',
    //       '<tpl if="status==4"><span class="status regle"></tpl>',
    //       '<tpl if="status==5"><span class="status refuse"></tpl>',
    //       '{statusString}</span>',          
    //     '</div>',
    //     '<div class="bottom">',
    //       '<span class="bottom-left">{date:date("j M, Y")}</span>',
    //     ''),
    itemTpl: new Ext.XTemplate('<div class="title"><span class="main">{firstname} {name}</span><span class="title-right">{amount} {currency}</span></div><div class="bottom"><span class="bottom-left">{date:date("j M, Y")}</span><tpl if="(status!=1)&&(status!=2)&&(status!=3)&&(status!=4)&&(status!=5)"><span class="status other"></tpl><tpl if="status==1"><span class="status avalider"></tpl><tpl if="status==2"><span class="status valide"></tpl><tpl if="status==3"><span class="status comptabilise"></tpl><tpl if="status==4"><span class="status regle"></tpl><tpl if="status==5"><span class="status refuse"></tpl>{statusString}</span></div>'),
    
    // <span class="title-left">{type}</span>
    // itemTpl: new Ext.XTemplate('<div class="title"><span class="main">{firstname} {name}</span><tpl if="(status!=1)&&(status!=2)&&(status!=3)&&(status!=4)&&(status!=5)"><span class="title-other title-right">{amount} {currency}</span></tpl><tpl if="status==1"><span class="title-avalider title-right">{amount} {currency}</span></tpl><tpl if="status==2"><span class="title-valide title-right">{amount} {currency}</span></tpl><tpl if="status==3"><span class="title-comptabilise title-right">{amount} {currency}</span></tpl><tpl if="status==4"><span class="title-regle title-right">{amount} {currency}</span></tpl><tpl if="status==5"><span class="title-refuse title-right">{amount} {currency}</span></tpl></div><div class="bottom"><span class="bottom-left">{date:date("j M, Y")}</span><span class="status">{statusString}</span></div>'),

    store:'NdfsearchLocal',
    emptyText : 'Aucune note de frais',
    title: 'Note de frais'
  },
});