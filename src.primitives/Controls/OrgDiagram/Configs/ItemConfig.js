/**
 * @class ItemConfig
 * @classdesc Item Configuration Object defines properties of individual node in the organizational chart hierarchy. See `items` collection property
 * of organizational chart control configuration object. 
 * 
 * @param {ItemConfig} arg0 Item config properties
 * 
 * @param {string} arg0 Item id
 * @param {string[]} arg1 Parent id
 * @param {string} arg2 Title
 * @param {string} arg3 Description 
 * @param {string} arg4 Image
 */
primitives.orgdiagram.ItemConfig = function (arg0, arg1, arg2, arg3, arg4) {
  var property;
  /**
   * Item id. It should be unique per chart.
   * 
   * @type {string}
   */
  this.id = null;

  /**
   * Parent item id. If `null` then node is the root item of the hierarchy.
   * @type {string}
   */
  this.parent = null;

  /**
   * Title
   * 
   * @type {string}
   */
  this.title = null;

  /**
   * Description
   * 
   * @type {string}
   */
  this.description = null;

  /**
   * Image
   * 
   * @type {string}
   */
  this.image = null;

  /**
   * Context object
   * 
   * @type {object}
   */
  this.context = null;

  /**
   * Title background color. The same color is used for node marker when control has enabled auto fit mode.
   * 
   * @type {string}
   */
  this.itemTitleColor = primitives.common.Colors.RoyalBlue;

  /**
   * Marker type. The shape of the marker when node is minimized by autofit. The control supports auto fit of diagram into available screen space.
   * When diagram size significantly larger than available screen space, its scrolling and navigation becomes problematic,
   * so control supports automatic diagram fit into the screen space via rendering some of its nodes in form of small markers.
   * So this option sets marker shape for individual node.
   * 
   * @type {ShapeType}
   */
  this.minimizedItemShapeType = null;

  /**
   * Group Title. The group title on the side of the diagram node is one of controls default easy to use features.
   * It gives extra dimension for nodes visual grouping in the diagram.
   * 
   * @type {string}
   */
  this.groupTitle = null;

  /**
   * The group title background color.
   * 
   * @type {string}
   */
  this.groupTitleColor = primitives.common.Colors.RoyalBlue;

  /**
   * If `false` it makes item invisible in the layout. If item has no visible parents then its connections are hidden as well.
   * From navigation perspetive invisible items make all their children to be children of their parents.
   * 
   * @type {boolean}
   */
  this.isVisible = true;

  /**
   * If true it makes item inactive in the diagram layout. Inactive items are regular items excluded from navigation, that means 
   * when diagram uses auto fit mode, selection of the neighboring nodes goes through inactive items, so all nodes next to inactive item
   * become selected and shown in full size as well. Inactive items play a role of in layout annotations having no user interaction
   * and templated with HTML. For example they can be used to add titles into family diagram layout or terminator items
   * indicating that upon reaching them diagram would load extra nodes into layout.
   * 
   * @type {boolean}
   */
  this.isActive = true;

  /**
   * Shows selection check box for the node.
   * If Auto then selection check box visibility depends on control's configuration.
   * 
   * Auto - depends on `hasSelectorCheckbox` property of the control
   * True - shown
   * False - hidden
   * 
   * @type {Enabled}
   */
  this.hasSelectorCheckbox = primitives.common.Enabled.Auto;

  /**
   * Shows context buttons panel for the node.
   * If Auto then context buttons panel visibility depends on control's configuration.
   * 
   * Auto - depends on `hasButtons` property of the control
   * True - shown
   * False - hidden
   * 
   * @type {Enabled}
   */
  this.hasButtons = primitives.common.Enabled.Auto;

  /**
   * Item type. This property defines child node placement relative to its parent node. By default all children that belong 
   * to a parent node are of the same rank and status between each other and due to that, are always aligned below
   * the parent and are organized in the same way. However for special cases were the end user wishes to have a child
   * that is seperate from the rest of it's siblings, we provide custom child types that the end user can use to
   * place diffrent ranking nodes anywhere around the parent node. These placement options give a lot of space for
   * the creation of roles such as an Assistant, Adviser, various Partners and co-heads that may be in the organization.
   * Additionally, by default `Regular` children are always placed in a horizontal line below the parent node.
   * 
   * @type {ItemType}
   */
  this.itemType = primitives.orgdiagram.ItemType.Regular;

  /**
   * Defines leftward or rightward item placement relative to the parent item.
   * By default it is `Auto` and depends on general diagram layout orientation.
   *  
   * @type {AdviserPlacementType}
   */
  this.adviserPlacementType = primitives.common.AdviserPlacementType.Auto;

  /**
   * Defines shape of children formation. By default a node's children are always placed in a horizontal line 
   * below the parent node. On a large scale this may result in the end user having to scroll screens 
   * in order to view all of the nodes. To compensate for this, we provide the option of placing all 
   * of the children of a parent node in a sqaure/matrix formation. This will reduce sideways screen 
   * scrolling by compacting the child nodes into a much smaller area on the screen.
   *  
   * @type {ChildrenPlacementType}
   */
  this.childrenPlacementType = primitives.common.ChildrenPlacementType.Auto;

  /**
   * Template name. Templates are HTML fragments containing layout and styles used to render diagram nodes.
   * They are defined with a named configuration objects. See `templates` property of control's configuration object.
   * This option lets individually assign rendering template per individual node of the diagram.
   * 
   * @type {string}
   */
  this.templateName = null;

  /**
   * Sets callout annotation visibility for individual node. The callout annotation is one of easy to use features of the control.
   * By default it is displayed for markers in order to preview their node's content. The content is displayed using
   * current template of the node it is rendered for.
   * 
   * The callout can be forced to be displayed for regular nodes as well. In that case use `calloutTemplateName` property
   * to change their template.
   * 
   * Auto - depends on `showCallout` property of the control
   * True - shown regardless of node's visibility
   * False - hidden
   * 
   * @type {Enabled}
   */
  this.showCallout = primitives.common.Enabled.Auto;

  /**
   * Callout annotation template name. This option lets individually assign rendering callout annotation template
   * per individual node of the diagram.
   * 
   * Templates are HTML fragments containing layout and styles used to render diagram nodes.
   * They are defined with a named configuration objects. See `templates` property of control's configuration object.
   * 
   * @type {string}
   */
  this.calloutTemplateName = null;

  /**
   * Marker label.
   * 
   * @type {string}
   */
  this.label = null;

  /**
   * Sets label visibility for individual nodes. Labels are only rendered for a node's markers. 
   * 
   * The control does not preserve space for labels in the diagram layout, since that would contradict the purpose of minimizing the nodes
   * into markers. Use controls `dotLevelShift`, `dotItemsInterval` properties to preserve space between nodes for labels.
   * 
   * Labels are displayed inside of `div`s of the fixed size, see `labelSize` property, and control provides simple conflict
   * resoltion to avoid labels overlapping. If two labels overlap each other with their bounding rectangles then only one of them
   * is going to stay visible.
   * 
   * Auto - displays label only when it has space to be rendered.
   * True - shows label regardless, even if it overlaps other labels and nodes.
   * False - hidden.
   * 
   * @type {Enabled}
   */
  this.showLabel = primitives.common.Enabled.Auto;

  /**
   * Label size. Sets label's placeholder `div` size and controls conflict resolution if labels overlap each other.
   * If `null` then it is set to `labelSize` property of the control configuration.
   * 
   * @type {Size}
   */
  this.labelSize = null;

  /**
   * Label orientation.
   * If `Auto` then it is set to `labelOrientation` property of the control configuration.
   * 
   * @type {TextOrientationType}
   */
  this.labelOrientation = primitives.text.TextOrientationType.Auto;

  /**
   * Label placement. Sets label placement relative to the marker bounding rectangle.
   * If `Auto` then it is set to `labelPlacement` of the control configuration.
   * 
   * @type {PlacementType}
   */
  this.labelPlacement = primitives.common.PlacementType.Auto;

  switch (arguments.length) {
    case 1:
      for (property in arg0) {
        if (arg0.hasOwnProperty(property)) {
          this[property] = arg0[property];
        }
      }
      break;
    case 5:
      this.id = arg0;
      this.parent = arg1;
      this.title = arg2;
      this.description = arg3;
      this.image = arg4;
      break;
  }
};
