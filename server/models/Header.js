const keystone = require('keystone');

const { Types } = keystone.Field;

const Header = new keystone.List('Headers');

Header.add({
    image:{ type: Types.CloudinaryImage ,initial: true, required: true }
});

Header.register();