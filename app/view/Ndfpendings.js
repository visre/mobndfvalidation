Ext.define('mobndf.view.Ndfpendings', {
  extend: 'Ext.List',
  requires: [
    'mobndf.model.Ndf'
  ],
  xtype: 'ndfpendings',
  config: {
    scrollable: true,
    cls:'dataview-inline ndfs',
    // itemTpl: new Ext.XTemplate('<div class="title"><span class="main">{type}</span><span class="title-right">{amount} {currency}</span><span class="title-left">{name}</span></div><div class="bottom"><span class="bottom-lef"><tpl if="mode == 3">{km} Km</tpl><tpl if="mode != 3 && mode !=99">Qté : {quantity}</tpl></span><span class="bottom-right">{date:date("j M, Y")}</span>'),
    itemTpl: new Ext.XTemplate('<div class="title"><span class="main">{firstname} {name}</span><span class="title-right">{amount} {currency}</span></div><div class="bottom"><span class="bottom-left">{date:date("j M, Y")}</span><tpl if="(status!=1)&&(status!=2)&&(status!=3)&&(status!=4)&&(status!=5)"><span class="status other"></tpl><tpl if="status==1"><span class="status avalider"></tpl><tpl if="status==2"><span class="status valide"></tpl><tpl if="status==3"><span class="status comptabilise"></tpl><tpl if="status==4"><span class="status regle"></tpl><tpl if="status==5"><span class="status refuse"></tpl>{statusString}</span></div>'),
    store:'Ndfpendings',
    emptyText : 'Aucune note de frais en attente de validation',
    title: 'Notes de frais à valider'
  },
});