// general section
export enum BazarTypeEnum {
    sbazar = 'sbazar',
    bazos = 'bazos',
    aukro = 'aukro'
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
        limit:  number;
        offset: number;
        total:  number;
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