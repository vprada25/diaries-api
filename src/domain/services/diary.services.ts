import { IDiary } from '../interface'
import { dbDiaries } from '../../@common/constants'

export const getDiaries = (): IDiary[] => dbDiaries
