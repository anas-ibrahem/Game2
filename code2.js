gdjs.ULOSECode = {};
gdjs.ULOSECode.localVariables = [];
gdjs.ULOSECode.GDPlayerObjects1= [];
gdjs.ULOSECode.GDPlayerObjects2= [];
gdjs.ULOSECode.GDPlatform_9595BridgeObjects1= [];
gdjs.ULOSECode.GDPlatform_9595BridgeObjects2= [];
gdjs.ULOSECode.GDPlatform_9595MovingObjects1= [];
gdjs.ULOSECode.GDPlatform_9595MovingObjects2= [];
gdjs.ULOSECode.GDHealthyObjects1= [];
gdjs.ULOSECode.GDHealthyObjects2= [];
gdjs.ULOSECode.GDUnhealthyObjects1= [];
gdjs.ULOSECode.GDUnhealthyObjects2= [];
gdjs.ULOSECode.GDBoundaryObjects1= [];
gdjs.ULOSECode.GDBoundaryObjects2= [];
gdjs.ULOSECode.GDTutorialObjects1= [];
gdjs.ULOSECode.GDTutorialObjects2= [];
gdjs.ULOSECode.GDUI_9595ScoreObjects1= [];
gdjs.ULOSECode.GDUI_9595ScoreObjects2= [];
gdjs.ULOSECode.GDLeftArrowRoundButtonObjects1= [];
gdjs.ULOSECode.GDLeftArrowRoundButtonObjects2= [];
gdjs.ULOSECode.GDRightArrowRoundButtonObjects1= [];
gdjs.ULOSECode.GDRightArrowRoundButtonObjects2= [];
gdjs.ULOSECode.GDTopArrowRoundButtonObjects1= [];
gdjs.ULOSECode.GDTopArrowRoundButtonObjects2= [];
gdjs.ULOSECode.GDTilemap_9595LevelObjects1= [];
gdjs.ULOSECode.GDTilemap_9595LevelObjects2= [];
gdjs.ULOSECode.GDBackgroundObjects1= [];
gdjs.ULOSECode.GDBackgroundObjects2= [];
gdjs.ULOSECode.GDUnhealthy2Objects1= [];
gdjs.ULOSECode.GDUnhealthy2Objects2= [];
gdjs.ULOSECode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.ULOSECode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];


gdjs.ULOSECode.mapOfGDgdjs_9546ULOSECode_9546GDTransparentButtonWithWhiteBlueBorderObjects1Objects = Hashtable.newFrom({"TransparentButtonWithWhiteBlueBorder": gdjs.ULOSECode.GDTransparentButtonWithWhiteBlueBorderObjects1});
gdjs.ULOSECode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.ULOSECode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ULOSECode.mapOfGDgdjs_9546ULOSECode_9546GDTransparentButtonWithWhiteBlueBorderObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


};

gdjs.ULOSECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ULOSECode.GDPlayerObjects1.length = 0;
gdjs.ULOSECode.GDPlayerObjects2.length = 0;
gdjs.ULOSECode.GDPlatform_9595BridgeObjects1.length = 0;
gdjs.ULOSECode.GDPlatform_9595BridgeObjects2.length = 0;
gdjs.ULOSECode.GDPlatform_9595MovingObjects1.length = 0;
gdjs.ULOSECode.GDPlatform_9595MovingObjects2.length = 0;
gdjs.ULOSECode.GDHealthyObjects1.length = 0;
gdjs.ULOSECode.GDHealthyObjects2.length = 0;
gdjs.ULOSECode.GDUnhealthyObjects1.length = 0;
gdjs.ULOSECode.GDUnhealthyObjects2.length = 0;
gdjs.ULOSECode.GDBoundaryObjects1.length = 0;
gdjs.ULOSECode.GDBoundaryObjects2.length = 0;
gdjs.ULOSECode.GDTutorialObjects1.length = 0;
gdjs.ULOSECode.GDTutorialObjects2.length = 0;
gdjs.ULOSECode.GDUI_9595ScoreObjects1.length = 0;
gdjs.ULOSECode.GDUI_9595ScoreObjects2.length = 0;
gdjs.ULOSECode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.ULOSECode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.ULOSECode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.ULOSECode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.ULOSECode.GDTopArrowRoundButtonObjects1.length = 0;
gdjs.ULOSECode.GDTopArrowRoundButtonObjects2.length = 0;
gdjs.ULOSECode.GDTilemap_9595LevelObjects1.length = 0;
gdjs.ULOSECode.GDTilemap_9595LevelObjects2.length = 0;
gdjs.ULOSECode.GDBackgroundObjects1.length = 0;
gdjs.ULOSECode.GDBackgroundObjects2.length = 0;
gdjs.ULOSECode.GDUnhealthy2Objects1.length = 0;
gdjs.ULOSECode.GDUnhealthy2Objects2.length = 0;
gdjs.ULOSECode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.ULOSECode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;

gdjs.ULOSECode.eventsList0(runtimeScene);
gdjs.ULOSECode.GDPlayerObjects1.length = 0;
gdjs.ULOSECode.GDPlayerObjects2.length = 0;
gdjs.ULOSECode.GDPlatform_9595BridgeObjects1.length = 0;
gdjs.ULOSECode.GDPlatform_9595BridgeObjects2.length = 0;
gdjs.ULOSECode.GDPlatform_9595MovingObjects1.length = 0;
gdjs.ULOSECode.GDPlatform_9595MovingObjects2.length = 0;
gdjs.ULOSECode.GDHealthyObjects1.length = 0;
gdjs.ULOSECode.GDHealthyObjects2.length = 0;
gdjs.ULOSECode.GDUnhealthyObjects1.length = 0;
gdjs.ULOSECode.GDUnhealthyObjects2.length = 0;
gdjs.ULOSECode.GDBoundaryObjects1.length = 0;
gdjs.ULOSECode.GDBoundaryObjects2.length = 0;
gdjs.ULOSECode.GDTutorialObjects1.length = 0;
gdjs.ULOSECode.GDTutorialObjects2.length = 0;
gdjs.ULOSECode.GDUI_9595ScoreObjects1.length = 0;
gdjs.ULOSECode.GDUI_9595ScoreObjects2.length = 0;
gdjs.ULOSECode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.ULOSECode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.ULOSECode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.ULOSECode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.ULOSECode.GDTopArrowRoundButtonObjects1.length = 0;
gdjs.ULOSECode.GDTopArrowRoundButtonObjects2.length = 0;
gdjs.ULOSECode.GDTilemap_9595LevelObjects1.length = 0;
gdjs.ULOSECode.GDTilemap_9595LevelObjects2.length = 0;
gdjs.ULOSECode.GDBackgroundObjects1.length = 0;
gdjs.ULOSECode.GDBackgroundObjects2.length = 0;
gdjs.ULOSECode.GDUnhealthy2Objects1.length = 0;
gdjs.ULOSECode.GDUnhealthy2Objects2.length = 0;
gdjs.ULOSECode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.ULOSECode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;


return;

}

gdjs['ULOSECode'] = gdjs.ULOSECode;
