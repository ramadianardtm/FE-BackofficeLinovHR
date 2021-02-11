import { Menu } from '../interface/menu'
import { Apps } from './apps';
export interface Module {
    id: String,
    updatedAt: String,
    version: Number,
    code: String,
    name: String,
    sortOrder: Number,
    menus: Menu[],
    apps: Apps,
    selected: Boolean
}