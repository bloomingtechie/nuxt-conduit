/* tslint:disable */
/* eslint-disable */
/**
 * RealWorld Conduit API
 * Conduit API documentation
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface UpdateArticle
 */
export interface UpdateArticle {
    /**
     * 
     * @type {string}
     * @memberof UpdateArticle
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateArticle
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateArticle
     */
    body?: string;
}

/**
 * Check if a given object implements the UpdateArticle interface.
 */
export function instanceOfUpdateArticle(value: object): boolean {
    return true;
}

export function UpdateArticleFromJSON(json: any): UpdateArticle {
    return UpdateArticleFromJSONTyped(json, false);
}

export function UpdateArticleFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateArticle {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
        'description': json['description'] == null ? undefined : json['description'],
        'body': json['body'] == null ? undefined : json['body'],
    };
}

export function UpdateArticleToJSON(value?: UpdateArticle | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'title': value['title'],
        'description': value['description'],
        'body': value['body'],
    };
}
