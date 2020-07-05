const keystone = require('keystone');

const { Types } = keystone.Field;

const Menu = new keystone.List('Menus');

Menu.add({
    title:{ type: Types.Text, initial: true, required: true, index: true },
    description: { type: Types.Text, initial: true, required: true },
    price: { type: Types.Text, initial: true, required: true },
    image: { type: Types.CloudinaryImage ,initial: true, required: true }
});

Menu.register();