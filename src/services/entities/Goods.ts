// general section
export enum BazarTypeEnum {
    sbazar = 'sbazar',
    bazos = 'bazos',
    aukro = 'aukro'
}

export enum SortEnum {
    dateAsc = 'dateAsc',
    dateDesc = 'dateDesc',
    priceAsc = 'priceAsc',
    priceDesc = 'priceDesc'
}

export type Goods = {
    id: number
    name: string
    startTime: string
    auction: boolean
    price: number
    titleImg: string
    location: {
        location: string,
        region: string
    }
    bazar: string
    seo_name?: string
    user?: string
    price_by_agree?: boolean
}

export type GoodsListType = Array<Goods>

// sbazar section

export type FetchSbazarGoodsInputData = {
    offset: number
    phrase: string
    limit: number
}

export type FetchSbazarGoodsOutputResult = {
    pagination: {
        limit: number;
        offset: number;
        total: number;
    }
    results: Array<SbazarResultItem>
    status_code: number
    status_message: string
    warnings: {
        unsupported_sorting: string[]
    }
}

export type SbazarResultItem = {
    category: {
        id: number,
        name: string,
        seo_name: string
    },
    create_date: string,
    edit_date: string,
    id: number,
    images: [
        {
            url: string
        }
    ],
    images_total_count: number,
    is_advert_mirroring: boolean,
    locality: {
        address: string,
        address_id: number,
        citypart: string,
        country_id: number,
        district: string,
        district_id: number,
        district_seo_name: string,
        entity_id: number,
        entity_type: string,
        housenumber: string,
        municipality: string,
        municipality_id: number,
        municipality_seo_name: string,
        quarter: string,
        quarter_id: number,
        region: string,
        region_id: number,
        region_seo_name: string,
        source: string,
        street: string,
        street_id: number,
        streetnumber: string,
        ward: string,
        ward_id: number,
        zip: string
    },
    name: string,
    old_id: number | null,
    premise: number | null,
    price: number,
    price_by_agreement: boolean,
    seo_name: string,
    sorting_date: string,
    source: string,
    topped: boolean,
    user: {
        id: number,
        user_service: {
            shop_url: string
        }
    },
    videos_total_count: number
}

// aukro section

export type FetchAukroGoodsInputData = {
    page: number,
    size: number,
    text: string
}

export type FetchAukroGoodsInputBody = {
    fallbackItemsCount: number,
    splitGroupKey: string,
    splitGroupValue: null,
    text: string
}

export type FetchAukroGoodsOutputResult = {
    aggregations: Aggregation[]
    minPrice: number
    maxPrice: number
    resultReport: ResultReport
    fallbackItems: any[]
    links: any[]
    content: AukroResultItem[]
    page: Page
}

export type Aggregation = {
    type: string
    message: string
    buckets: Bucket[]
    otherCount: number
    attributeId?: number
    attributePosition?: number
}

export type Bucket = {
    value: any
    seoUrl?: string
    message: string
    count: number
    landingPage: boolean
}

export type ResultReport = {
    originalText: string
    excludedCategory: boolean
    state: string
    version: string
    sort: string
    defaultSort: string
    sortDirection: string
    defaultSortDirection: string
    defaultLayout: string
    hideAds: boolean
    provider: string
}

export type Page = {
    size: number
    totalElements: number
    totalPages: number
    number: number
}

export type CategoryPath = {
    id: number
    name: string
    seoUrl: string
}

export type Attribute = {
    attributeId: number
    attributeName: string
    attributeValue: string
    attributeValueId?: number
    position: number
}

export type AukroResultItem = {
    itemId: number
    itemName: string
    categoryPath: CategoryPath[]
    startingTime: string
    endingTime: string
    buyNowActive: boolean
    buyNowPrice: {
        amount: number
        currency: string
    }
    quantity: number
    quantityType: string
    attributes?: Attribute[]
    price: {
        amount: number
        currency: string
    }
    priceWithShipping: {
        amount: number
        currency: string
    }
    titleImage: {
        position: number
        titleImage: boolean
        url: string
        thumbnailReady: boolean
    }
    titleImageUrl: string
    seoUrl: string
    ppPriorityList: boolean
    ppHighlight: boolean
    ppBoldTitle: boolean
    buyersCountRelative: number
    itemState: string
    sellerLogin: string
    seller: {
        userId: number
        showName: string
        companyAccount: boolean
        accountActivated: boolean
    }
    userWatching: boolean
    watchersCount: number
    pepperLevel: number
    personalPickup: boolean
    location: string
    postcode: string
    aukroFreePriorityList: boolean
    paymentViaAukro: boolean
    locationRegion: {
        cityName: string
        seoUrl: string
    }
    adultContent: boolean
    aukroPlus: boolean
    paymentOnline: boolean
    freeShipping: boolean
    auction: boolean
    links: any[]
}