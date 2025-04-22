import { controller } from "./objects/controller.js";
import {lever} from "./objects/lever.js"
import { menu } from "./objects/menu.js";

menu.onSetOptionIndex(0);
menu.onOption()


controller.onUp()
controller.onDown()
controller.onSelect()

lever.onMove.start();
lever.onMove.middle();
lever.onMove.end();


