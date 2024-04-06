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
import type { Comment } from './Comment';
import {
    CommentFromJSON,
    CommentFromJSONTyped,
    CommentToJSON,
} from './Comment';

/**
 * 
 * @export
 * @interface CreateArticleComment200Response
 */
export interface CreateArticleComment200Response {
    /**
     * 
     * @type {Comment}
     * @memberof CreateArticleComment200Response
     */
    comment: Comment;
}

/**
 * Check if a given object implements the CreateArticleComment200Response interface.
 */
export function instanceOfCreateArticleComment200Response(value: object): boolean {
    if (!('comment' in value)) return false;
    return true;
}

export function CreateArticleComment200ResponseFromJSON(json: any): CreateArticleComment200Response {
    return CreateArticleComment200ResponseFromJSONTyped(json, false);
}

export function CreateArticleComment200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateArticleComment200Response {
    if (json == null) {
        return json;
    }
    return {
        
        'comment': CommentFromJSON(json['comment']),
    };
}

export function CreateArticleComment200ResponseToJSON(value?: CreateArticleComment200Response | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'comment': CommentToJSON(value['comment']),
    };
}
