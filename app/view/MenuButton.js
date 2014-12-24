Ext.define('mobndf.view.MenuButton', {
	extend: 'Ext.Button',
	xtype: 'menubutton',

	config: {
//		iconCls: 'icon-action',
//		ui : 'pathmenu',
		iconMask: true,
		left: 10,
		// bottom: 10,
		// height: 40,
		// width: 40,
//		cls: 'menubutton',
		isOpen: false
	}
});