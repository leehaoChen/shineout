/**
 * cn - 异常处理
 *    -- onUploadError 用来处理上传到服务器返回的异常
 * en - Error
 */
import React from 'react'
import { Upload, Button } from 'shineout'
import FontAwesome from '../Icon/FontAwesome'

export default function () {
  return (
    <div>
      <Upload
        action="/path-no-exist"
        accept="image/*"
        name="file"
        onSuccess={(res, file) => file.name}
        onError={(xhr) => {
          console.log(xhr)
          if (xhr.status === 404) return 'Url not found.'
          return 'Upload Fail.'
        }}
        limit={3}
        style={{ width: 300, marginBottom: 30 }}
      >
        <Button><FontAwesome name="upload" /> Upload file</Button>
      </Upload>

      <Upload.Image
        action="/path-no-exist"
        accept="image/*"
        name="file"
        onSuccess={(res, file, data) => ({ data })}
        onError={(xhr) => {
          console.log(xhr)
          if (xhr.status === 404) return 'Url not found.'
          return 'Upload Fail.'
        }}
        renderResult={f => f.data}
      />
    </div>
  )
}
