import { NextRequest, NextResponse } from 'next/server'

import Product from '@/lib/db/models/product.model'
import { connectToDatabase } from '@/lib/db'

export const GET = async (request: NextRequest) => {
  const listType = request.nextUrl.searchParams.get('type') || 'history'
  const productIdsParam = request.nextUrl.searchParams.get('ids')
  const categoriesParam = request.nextUrl.searchParams.get('categories')

  if (!productIdsParam || !categoriesParam) {
    return NextResponse.json([])
  }

  const productIds = productIdsParam.split(',')
  const categories = categoriesParam.split(',')
  const filter =
    listType === 'history'  // we will get the related products depend on the history but will use the categories of the products 
      ? {
          _id: { $in: productIds }, //: Filters products whose _id is in the productIds array.

        }
      : { category: { $in: categories } // Filters products that belong to any of the specified categories.
      , _id: { $nin: productIds }
    //Excludes products whose _id is in the productIds array.
// Purpose: This allows for retrieving products that are not in the history list but belong to the specified categories.
    }

  await connectToDatabase()
  const products = await Product.find(filter)
  if (listType === 'history')
    return NextResponse.json(
      products.sort(
        (a, b) =>
          productIds.indexOf(a._id.toString()) //  Finds the index of the product's ID in the productIds array.
         -
          productIds.indexOf(b._id.toString())
      )
    )
  return NextResponse.json(products)
}