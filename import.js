const { SiteClient } = require('datocms-client')
const client = new SiteClient('1787c5603615918ca401c9d6621235')
const config = require('./gatsby-config')

config.siteMetadata.products.reduce(
  (chain, product) =>
    chain
      .then(() =>
        client.uploadImage(
          `https://raw.githubusercontent.com/AnthonyWelc/bebecoders-images/master/${product.id}.jpg`
        )
      )
      .then(image =>
        client.items.create({
          name: product.name,
          image,
          price: product.price,
          itemType: '553079'
        })
      ),
      
  Promise.resolve()
)
