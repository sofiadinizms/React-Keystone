const keystone = require('keystone');

const { Types } = keystone.Field;

const Item = new keystone.List('Items');

Item.add({
    title:{ type: Types.Text, initial: true, required: true, index: true },
    description: { type: Types.Text, initial: true, required: true },
    price: { type: Types.Text, initial: true, required: true },
    image: { type: Types.CloudinaryImage ,initial: true, required: true }
});

Item.register();