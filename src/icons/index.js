// https://www.cnblogs.com/luoxuemei/p/12154835.html
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'

Vue.component('svg-icon', SvgIcon)

/**
 * require.context(directory,useSubdirectories,regExp)
 *
 * 获取指定文件夹下的所有文件
 *
 * directory: 指定目录
 * useSubdirectories: 是否查找该目录下的子级目录
 * regExp: 匹配获取文件的正则表达式
 */
const req = require.context('./svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)
