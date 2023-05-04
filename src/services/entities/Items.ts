type Item = {
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
    name:string,
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

export type AllItems = Array<Item>

export const items:AllItems = [
    {
        "category": {
            "id": 300,
            "name": "Křesla",
            "seo_name": "300-kresla"
        },
        "create_date": "2023-03-16T22:56:49",
        "edit_date": "2023-04-25T14:48:20",
        "id": 188204652,
        "images": [
            {
                "url": "//d46-a.sdn.cz/d_46/c_img_QN_4/lLqDeF.jpeg"
            }
        ],
        "images_total_count": 0,
        "is_advert_mirroring": false,
        "locality": {
            "address": "",
            "address_id": 0,
            "citypart": "",
            "country_id": 112,
            "district": "Hlavní město Praha",
            "district_id": 47,
            "district_seo_name": "hlavni-mesto-praha",
            "entity_id": 3468,
            "entity_type": "municipality",
            "housenumber": "",
            "municipality": "Praha",
            "municipality_id": 3468,
            "municipality_seo_name": "praha",
            "quarter": "",
            "quarter_id": 0,
            "region": "Hlavní město Praha",
            "region_id": 10,
            "region_seo_name": "hlavni-mesto-praha",
            "source": "regionserver",
            "street": "",
            "street_id": 0,
            "streetnumber": "",
            "ward": "",
            "ward_id": 0,
            "zip": ""
        },
        "name": "Starožitné křeslo",
        "old_id": null,
        "premise": null,
        "price": 3600,
        "price_by_agreement": false,
        "seo_name": "188204652-starozitne-kreslo",
        "sorting_date": "2023-04-25T14:48:20",
        "source": "web_source",
        "topped": true,
        "user": {
            "id": 81352442,
            "user_service": {
                "shop_url": "halcahalca2"
            }
        },
        "videos_total_count": 0
    },
    {
        "category": {
            "id": 219,
            "name": "Starožitný nábytek",
            "seo_name": "219-starozitny-nabytek"
        },
        "create_date": "2023-02-28T17:41:47",
        "edit_date": "2023-05-01T20:22:01",
        "id": 187335000,
        "images": [
            {
                "url": "//d46-a.sdn.cz/d_46/c_img_QO_8/UHgutW.jpeg"
            }
        ],
        "images_total_count": 0,
        "is_advert_mirroring": false,
        "locality": {
            "address": "",
            "address_id": 0,
            "citypart": "",
            "country_id": 112,
            "district": "Hlavní město Praha",
            "district_id": 47,
            "district_seo_name": "hlavni-mesto-praha",
            "entity_id": 3468,
            "entity_type": "municipality",
            "housenumber": "",
            "municipality": "Praha",
            "municipality_id": 3468,
            "municipality_seo_name": "praha",
            "quarter": "",
            "quarter_id": 0,
            "region": "Hlavní město Praha",
            "region_id": 10,
            "region_seo_name": "hlavni-mesto-praha",
            "source": "regionserver",
            "street": "",
            "street_id": 0,
            "streetnumber": "",
            "ward": "",
            "ward_id": 0,
            "zip": ""
        },
        "name": "Retro křesla",
        "old_id": null,
        "premise": null,
        "price": 3400,
        "price_by_agreement": false,
        "seo_name": "187335000-retro-kresla",
        "sorting_date": "2023-05-01T20:22:01",
        "source": "web_source",
        "topped": false,
        "user": {
            "id": 68905879,
            "user_service": {
                "shop_url": "antikmk"
            }
        },
        "videos_total_count": 0
    },
    {
        "category": {
            "id": 219,
            "name": "Starožitný nábytek",
            "seo_name": "219-starozitny-nabytek"
        },
        "create_date": "2022-06-07T14:40:56",
        "edit_date": "2023-05-01T10:42:51",
        "id": 172304312,
        "images": [
            {
                "url": "//d46-a.sdn.cz/d_46/c_img_QJ_n/uYLU0N.jpeg"
            }
        ],
        "images_total_count": 0,
        "is_advert_mirroring": false,
        "locality": {
            "address": "",
            "address_id": 0,
            "citypart": "",
            "country_id": 112,
            "district": "Zlín",
            "district_id": 38,
            "district_seo_name": "zlin",
            "entity_id": 3058,
            "entity_type": "municipality",
            "housenumber": "",
            "municipality": "Fryšták",
            "municipality_id": 3058,
            "municipality_seo_name": "frystak",
            "quarter": "",
            "quarter_id": 0,
            "region": "Zlínský kraj",
            "region_id": 9,
            "region_seo_name": "zlinsky-kraj",
            "source": "regionserver",
            "street": "",
            "street_id": 0,
            "streetnumber": "",
            "ward": "",
            "ward_id": 0,
            "zip": ""
        },
        "name": "KŘESLO",
        "old_id": null,
        "premise": null,
        "price": 2500,
        "price_by_agreement": false,
        "seo_name": "172304312-kreslo",
        "sorting_date": "2023-05-01T10:42:51",
        "source": "web_source",
        "topped": false,
        "user": {
            "id": 3627101,
            "user_service": {
                "shop_url": "aabbcc666"
            }
        },
        "videos_total_count": 0
    }
    ]