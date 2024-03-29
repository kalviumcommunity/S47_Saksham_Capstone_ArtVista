const Joi = require('joi');

const postSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
    image: Joi.string(),
});

function validatePost(data) {
    return postSchema.validate(data);
}

module.exports.validatePost = validatePost;
