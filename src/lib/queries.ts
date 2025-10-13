import { client } from './sanityClient'

export async function getProducts() {
  const query = `*[_type == "product"]{
    _id,
    name,
    description,
    price,
    "images": images[].asset->url,
    "category": category->name,
    "color": color->{name, hex},
    "size": size->name,
    inStock
  }`
  return await client.fetch(query)
}

export async function getProductsByCategory(categoryName: string) {
  const query = `*[_type == "product" && category->name == $categoryName]{
    _id,
    name,
    description,
    price,
    "images": images[].asset->url,
    "category": category->name,
    "color": color->{name, hex},
    "size": size->name,
    inStock
  }`
  return await client.fetch(query, { categoryName })
}

export async function getCategories() {
  const query = `*[_type == "category"]{
    _id,
    name,
    description
  }`
  return await client.fetch(query)
}

export async function getProductById(id: string) {
  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    name,
    description,
    details,
    price,
    "images": images[].asset->url,
    "category": category->{_id, name, description},
    "color": color->{name, hex},
    "size": size->name,
    inStock
  }`
  return await client.fetch(query, { id })
}

export async function getFeaturedProducts(limit: number = 8) {
  const query = `*[_type == "product" && inStock == true][0...$limit]{
    _id,
    name,
    description,
    price,
    "images": images[].asset->url,
    "category": category->name,
    "color": color->{name, hex},
    "size": size->name,
    inStock
  }`
  return await client.fetch(query, { limit })
}
