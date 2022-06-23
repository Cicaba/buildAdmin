import createAxios from '/@/utils/axios'
import { getAdminToken, isAdminApp } from '/@/utils/common'


export const refreshTokenUrl = '/index.php/api/common/refreshToken'


/**
 * 上传文件
 */
export function fileUpload(fd: FormData): ApiPromise {
    return createAxios({
        url: "/api/ajax/upload",
        method: 'POST',
        data: fd,
    }) as ApiPromise
}


export function refreshToken(): ApiPromise {
    return createAxios({
        url: refreshTokenUrl,
        method: 'POST',
        data: {
            refresh_token: getAdminToken('refresh'),
        },
    }) as ApiPromise
}

