
import {fetch} from './fetch'

export function getCategory(){
    return fetch({
        url:'category',
    })

}

export function getSubcategory(maitKey){
    return fetch({
        url:'subcategory',
        params:{
            maitKey
        }
    })
}

export function getCategoryDetail(miniWallkey, type){
    return fetch({
        url:'/subcategory/detail',
        params:{
            miniWallkey,
            type
        }
    })
}