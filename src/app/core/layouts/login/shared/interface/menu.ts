import { fr } from "date-fns/locale";
import { MenuAction } from '../interface/MenuAction'
export interface Menu {
    id: String,
    updatedAt: String,
    version: Number,
    code: String,
    name: String,
    parent: any,
    level: Number,
    sortOrder: Number,
    menuActions: Array<MenuAction>,
    child: any
}