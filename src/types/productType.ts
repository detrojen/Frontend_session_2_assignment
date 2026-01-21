type TReview = {

    "rating": 3,
    "comment": string,
    "date": Date,
    "reviewerName": string,
    "reviewerEmail": string
        
}
export type TProduct = 
{
      "id": number,
      "title": string,
      "description": string,
      "category": string,
      "price":number,
      "discountPercentage": number,
      "rating": number,
      "stock": number,
      "tags": string[],
      "brand": string,
      "sku": string,
      "weight": 4,
      "dimensions": {
        "width": number,
        "height": number,
        "depth": number
      },
      "warrantyInformation": string,
      "shippingInformation": string,
      "availabilityStatus": string,
      "reviews":TReview[],
      "returnPolicy": string,
      "minimumOrderQuantity": number,
      "meta": {
        "createdAt": Date,
        "updatedAt": Date,
        "barcode": string,
        "qrCode": string
      },
      "images":string[]
      "thumbnail": string
    }

export type TCartProduct = TProduct & {addedQnty:number}