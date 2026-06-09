// Normal Point Class

class Point {
  x: number;
  y: number;

  constructor() {
    this.x = 1;
    this.y = 1;
  }

  get Point() : String {
    return `${this.x}, ${this.y}`;
  }

  set Point(point : Point) {
    console.log('this Setter got used');
    this.x = point.x;
    this.y = point.y;
  }
}
 
const pt = new Point();
pt.x = 0;
pt.y = 0;
console.log(`The point is at (${pt.x}, ${pt.y})`);

let ptB = new Point();
ptB = pt;
console.log(`The point is at, ${ptB}`);

// Index Signature

class TechnicianPermissions {
  // Index Signature: any property name is a string, value is a boolean
  [permissionName: string]: boolean | ((s: string) => boolean);;

  constructor() {
    this.canRepair = true; // Fixed property
    this.canDelete = false;
  }
}

const tech = new TechnicianPermissions();
tech["accessVault"] = true; // You can add new properties on the fly!
tech["orderParts"] = false;