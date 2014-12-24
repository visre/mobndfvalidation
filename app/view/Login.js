Ext.define('mobndf.view.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'login',
    requires: ['Ext.form.FieldSet', 'Ext.form.Password', 'Ext.Label', 'Ext.Img'],
    config: {
        title: 'Connexion',
        items: [
                    {
                        xtype: 'image',
                        // src: Ext.Viewport.getOrientation() == 'portrait' ? 'resources/images/login1.png' : 'resources/images/login2.png',
                        // style: Ext.Viewport.getOrientation() == 'portrait' ? 'width:150px;height:150px;margin:auto' : 'width:100px;height:100px;margin:auto'
                    },
                    {
                        xtype: 'label',
                        html: 'Informations de connexion incorrectes.',
                        id: 'signInFailedLabel',
                        hidden: true,
                        hideAnimation: 'fadeOut',
                        showAnimation: 'fadeIn',
                        style: 'color:#990000;margin:5px 0px;'
                    },
                    {
                        xtype: 'fieldset',
                        title: 'Connexion',
                        items: [
                            {
                                xtype: 'textfield',
                                placeHolder: 'Utilisateur',
                                id: 'userNameTextField',
                                name: 'userNameTextField',
                                required: true
                            },
                            {
                                xtype: 'passwordfield',
                                placeHolder: 'Mot de passe',
                                id: 'passwordTextField',
                                name: 'passwordTextField',
                                required: true
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        id: 'logInButton',
                        ui: 'action',
                        padding: '10px',
                        text: 'Se connecter'
                    }
         ],
        listeners: [{
            delegate: '#logInButton',
            event: 'tap',
            fn: 'onLoginTap'
        }]
    },
    initialize: function(){
    	this.src = Ext.Viewport.getOrientation() == 'portrait' ? 'resources/images/login1.png' : 'resources/images/login2.png',
    	this.style = Ext.Viewport.getOrientation() == 'portrait' ? 'width:150px;height:150px;margin:auto' : 'width:100px;height:100px;margin:auto',
    	this.callParent(arguments);
    },
    onLoginTap : function() {
        var me = this;
        var usernameField = me.down('#userNameTextField'),
            passwordField = me.down('#passwordTextField'),
            label = me.down('#passwordTextField');
 
        label.hide();
        var username = usernameField.getValue(),
            password = passwordField.getValue();
        var task = Ext.create('Ext.util.DelayedTask', function () {
            label.setHtml('');
            me.fireEvent('signInCommand', me, username, password);
            usernameField.setValue('');
            passwordField.setValue('');
        });
        task.delay(500);
    },

    showSignInFailedMessage: function (message) {
        var label = this.down('#signInFailedLabel');
        label.setHtml(message);
        label.show();
    }

});
