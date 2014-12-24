Ext.define('mobndf.view.CapturePicture', {
    extend: 'Ext.Component',
    xtype: 'capturepicture',

    config: {
        captured: false,
        width: 140,
        height: 100,
        cls: 'picture-capture',
        html: [
            '<div class="icon"><i class="icon-camera"></i>Faire une photo</div>',
            '<img class="image-tns" />',
            '<input type="file" capture="camera" accept="image/*" />'
        ].join('')
    },

    initialize: function() {
        this.callParent(arguments);

        this.file = this.element.down('input[type=file]');
        this.img = this.element.down('img');

        this.file.on('change', this.setPicture, this);

        window.URL = window.URL || window.webkitURL;
    },

    setPicture: function(event) {
        var files = event.target.files;
        if (files.length === 1 && files[0].type.indexOf("image/") === 0) {
            this.img.setStyle('display', 'block');
            this.img.set({
                src: URL.createObjectURL(files[0])
            });
            this.setCaptured(true);
        }
    },

    reset: function() {
        this.img.setStyle('display', 'none');
        this.img.set({
            src: ''
        });
        this.setCaptured(false);
    },

    getImageDataUrl: function() { 
        var img = this.img.dom,
            imgCanvas = document.createElement("canvas"),
            imgContext = imgCanvas.getContext("2d");

        if (this.getCaptured()) {
            imgCanvas.width = img.width;
            imgCanvas.height = img.height;

            imgContext.drawImage(img, 0, 0, img.width, img.height);

            return imgCanvas.toDataURL("image/png");
        }
    }
});