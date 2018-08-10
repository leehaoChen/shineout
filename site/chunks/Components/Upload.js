/**
 * 此文件根据 scripts/components-page.ejs 生成，不要手动修改
 */
import React from 'react'
import navable from 'docs/Navable'
import MarkDown from 'docs/MarkDown'

import locate from 'doc/locate'

import cn from 'doc/pages/components/Upload/cn.md'
import en from 'doc/pages/components/Upload/en.md'

const source = locate(cn, en)

const examples = [
  {
    name: '1-base',
    title: locate('基本用法 \n 基础的文件上传', 'Base'),
    component: require('doc/pages/components/Upload/example-1-base.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-1-base.js'),
  },
  {
    name: '2-image',
    title: locate('上传图片 \n 使用 Upload.Image 处理带预览的图片上传', 'Image'),
    component: require('doc/pages/components/Upload/example-2-image.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-2-image.js'),
  },
  {
    name: '3-validator',
    title: locate('图片尺寸 \n 通过 validator.imageSize 校验图片尺寸，本例为 200px * 100px', ''),
    component: require('doc/pages/components/Upload/example-3-validator.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-3-validator.js'),
  },
  {
    name: '4-filesize',
    title: locate('文件大小 \n 文件大小校验，本例为 10KB', ''),
    component: require('doc/pages/components/Upload/example-4-filesize.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-4-filesize.js'),
  },
  {
    name: '5-error',
    title: locate('异常处理 \n onUploadError 用来处理上传到服务器返回的异常', 'Error'),
    component: require('doc/pages/components/Upload/example-5-error.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-5-error.js'),
  },
  {
    name: '6-recover',
    title: locate('恢复删除 \n 设置 recoverAble 为 true，点击删除后，文件会标记为已删除，并提供恢复功能', 'recover'),
    component: require('doc/pages/components/Upload/example-6-recover.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-6-recover.js'),
  },
  {
    name: '7-request',
    title: locate('自定义上传 \n 通过 request 函数，替代默认上传方法', 'Custom Request'),
    component: require('doc/pages/components/Upload/example-7-request.js').default,
    rawText: require('!raw-loader!doc/pages/components/Upload/example-7-request.js'),
  },
]

const codes = undefined

export default navable(props => (
  <MarkDown {...props} codes={codes} source={source} examples={examples} />
))
