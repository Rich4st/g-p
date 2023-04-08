import type { AxiosResponse } from 'axios'
import type { Collection } from '@gp/types'
import { useRequest } from '@/composables'

const { get, post, Delete, Put } = useRequest()

export const findUserCollections = (userId: string) => <Promise<AxiosResponse<Collection[]>>>get(`/collection/user/${userId}`)

export const deleteCollectionById = (collectionId = '') => <Promise<AxiosResponse<Collection>>>Delete(`/collection/${collectionId}`)

export const findCollectionById = (collectionId = '') => <Promise<AxiosResponse<Collection>>>get(`/collection/${collectionId}`)

export const updateCollectionById = (collectionId = '', data: Partial<Collection>) => <Promise<AxiosResponse<Collection>>>Put(`/collection/${collectionId}`, data)
