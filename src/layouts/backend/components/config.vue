<template>
  <div class="layout-config-drawer">
    <el-drawer :model-value="configStore.layout.showDrawer" title="布局配置" size="310px" @close="onCloseDrawer">
      <el-scrollbar class="layout-mode-style-scrollbar">
        <el-form ref="formRef" :model="configStore.layout">
          <div class="layout-mode-styles-box">
            <el-divider border-style="dashed">布局方式</el-divider>
            <div class="layout-mode-box-style">
              <el-row class="layout-mode-box-style-row" :gutter="10">
                <el-col :span="12">
                  <div @click="setLayoutMode('Default')" class="layout-mode-style default" :class="configStore.layout.layoutMode == 'Default' ? 'active' : ''">
                    <div class="layout-mode-style-box">
                      <div class="layout-mode-style-aside"></div>
                      <div class="layout-mode-style-container-box">
                        <div class="layout-mode-style-header"></div>
                        <div class="layout-mode-style-container"></div>
                      </div>
                    </div>
                    <div class="layout-mode-style-name">默认</div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div @click="setLayoutMode('Classic')" class="layout-mode-style classic" :class="configStore.layout.layoutMode == 'Classic' ? 'active' : ''">
                    <div class="layout-mode-style-box">
                      <div class="layout-mode-style-aside"></div>
                      <div class="layout-mode-style-container-box">
                        <div class="layout-mode-style-header"></div>
                        <div class="layout-mode-style-container"></div>
                      </div>
                    </div>
                    <div class="layout-mode-style-name">经典</div>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="10">
                <el-col :span="12">
                  <div @click="setLayoutMode('Streamline')" class="layout-mode-style streamline" :class="configStore.layout.layoutMode == 'Streamline' ? 'active' : ''">
                    <div class="layout-mode-style-box">
                      <div class="layout-mode-style-container-box">
                        <div class="layout-mode-style-header"></div>
                        <div class="layout-mode-style-container"></div>
                      </div>
                    </div>
                    <div class="layout-mode-style-name">单栏</div>
                  </div>
                </el-col>
              </el-row>
            </div>
            <el-divider border-style="dashed">全局</el-divider>
            <div class="layout-config-global">
              <el-form-item label="后台页面切换动画">
                <el-select @change="onCommitState($event, 'mainAnimation')" :model-value="configStore.layout.mainAnimation" placeholder="请选择">
                  <el-option label="slide-right" value="slide-right"></el-option>
                  <el-option label="slide-left" value="slide-left"></el-option>
                  <el-option label="el-fade-in-linear" value="el-fade-in-linear"></el-option>
                  <el-option label="el-fade-in" value="el-fade-in"></el-option>
                  <el-option label="el-zoom-in-center" value="el-zoom-in-center"></el-option>
                  <el-option label="el-zoom-in-top" value="el-zoom-in-top"></el-option>
                  <el-option label="el-zoom-in-bottom" value="el-zoom-in-bottom"></el-option>
                </el-select>
              </el-form-item>
            </div>

            <el-divider border-style="dashed">侧边栏</el-divider>
            <div class="layout-config-aside">
              <el-form-item label="侧边菜单栏背景色">
                <el-color-picker @change="onCommitState($event, 'menuBackground')" :model-value="configStore.layout.menuBackground" />
              </el-form-item>
              <el-form-item label="侧边菜单文字颜色">
                <el-color-picker @change="onCommitState($event, 'menuColor')" :model-value="configStore.layout.menuColor" />
              </el-form-item>
              <el-form-item label="侧边菜单激活项背景色">
                <el-color-picker @change="onCommitState($event, 'menuActiveBackground')" :model-value="configStore.layout.menuActiveBackground" />
              </el-form-item>
              <el-form-item label="侧边菜单激活项文字色">
                <el-color-picker @change="onCommitState($event, 'menuActiveColor')" :model-value="configStore.layout.menuActiveColor" />
              </el-form-item>
              <el-form-item label="显示侧边菜单顶栏(LOGO栏)">
                <el-switch @change="onCommitState($event, 'menuShowTopBar')" :model-value="configStore.layout.menuShowTopBar"></el-switch>
              </el-form-item>
              <el-form-item label="侧边菜单顶栏背景色">
                <el-color-picker @change="onCommitState($event, 'menuTopBarBackground')" :model-value="configStore.layout.menuTopBarBackground" />
              </el-form-item>
              <el-form-item label="侧边菜单宽度(展开时)">
                <el-input @input="onCommitState($event, 'menuWidth')" type="number" :step="10" :model-value="configStore.layout.menuWidth">
                  <template #append>px</template>
                </el-input>
              </el-form-item>
              <el-form-item label="侧边菜单默认图标">
                <selector @change="onCommitMenuDefaultIcon($event, 'menuDefaultIcon')" :model-value="configStore.layout.menuDefaultIcon" />
              </el-form-item>
              <el-form-item label="侧边菜单水平折叠">
                <el-switch @change="onCommitState($event, 'menuCollapse')" :model-value="configStore.layout.menuCollapse"></el-switch>
              </el-form-item>
              <el-form-item label="侧边菜单手风琴">
                <el-switch @change="onCommitState($event, 'menuUniqueOpened')" :model-value="configStore.layout.menuUniqueOpened"></el-switch>
              </el-form-item>
            </div>

            <el-divider border-style="dashed">顶栏</el-divider>
            <div class="layout-config-aside">
              <el-form-item label="顶栏背景色">
                <el-color-picker @change="onCommitState($event, 'headerBarBackground')" :model-value="configStore.layout.headerBarBackground" />
              </el-form-item>
              <el-form-item label="顶栏文字色">
                <el-color-picker @change="onCommitState($event, 'headerBarTabColor')" :model-value="configStore.layout.headerBarTabColor" />
              </el-form-item>
              <el-form-item label="顶栏悬停时背景色">
                <el-color-picker @change="onCommitState($event, 'headerBarHoverBackground')" :model-value="configStore.layout.headerBarHoverBackground" />
              </el-form-item>
              <el-form-item label="顶栏菜单激活项背景色">
                <el-color-picker @change="onCommitState($event, 'headerBarTabActiveBackground')" :model-value="configStore.layout.headerBarTabActiveBackground" />
              </el-form-item>
              <el-form-item label="顶栏菜单激活项文字色">
                <el-color-picker @change="onCommitState($event, 'headerBarTabActiveColor')" :model-value="configStore.layout.headerBarTabActiveColor" />
              </el-form-item>
            </div>
            <el-popconfirm @confirm="restoreDefault" title="确定要恢复全部配置到默认值吗？">
              <template #reference>
                <div class="ba-center">
                  <el-button class="w80" type="info">恢复默认</el-button>
                </div>
              </template>
            </el-popconfirm>
          </div>
        </el-form>
      </el-scrollbar>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
  import { useConfig } from '/@/stores/config'
  import { useNavTabs } from '/@/stores/navTabs'
  import { useRouter } from 'vue-router'
  import selector from '/@/components/icon/selector.vue'
  import { STORE_CONFIG, BEFORE_RESIZE_LAYOUT } from '/@/stores/constant/cacheKey'
  import { Local, Session } from '/@/utils/storage'

  const configStore = useConfig()
  const navTabs = useNavTabs()
  const router = useRouter()

  const onCommitState = (value: any, name: any) => {
      configStore.setLayout(name, value)
  }

  const setLayoutMode = (mode: string) => {
      Session.set(BEFORE_RESIZE_LAYOUT, {
          layoutMode: mode,
          menuCollapse: configStore.layout.menuCollapse,
      })
      configStore.setLayoutMode(mode)
  }

  // 修改默认菜单图标
  const onCommitMenuDefaultIcon = (value: any, name: any) => {
      configStore.setLayout(name, value)

      const menus = navTabs.state.tabsViewRoutes
      navTabs.setTabsViewRoutes([])
      setTimeout(() => {
          navTabs.setTabsViewRoutes(menus)
      }, 200)
  }

  const onCloseDrawer = () => {
      configStore.setLayout('showDrawer', false)
  }

  const restoreDefault = () => {
      Local.remove(STORE_CONFIG)
      Session.remove(BEFORE_RESIZE_LAYOUT)
      router.go(0)
  }
</script>

<style scoped lang="scss">
  .layout-config-drawer :deep(.el-input__inner) {
      padding: 0 0 0 6px;
  }
  .layout-config-drawer :deep(.el-input-group__append) {
      padding: 0 10px;
  }
  .layout-config-drawer :deep(.el-drawer__header) {
      margin-bottom: 0 !important;
  }
  .layout-config-drawer :deep(.el-drawer__body) {
      padding: 0;
  }
  .layout-mode-styles-box {
      padding: 20px;
  }
  .layout-mode-box-style-row {
      margin-bottom: 15px;
  }
  .layout-mode-style {
      position: relative;
      height: 100px;
      border: 1px solid var(--color-sub-2);
      border-radius: var(--el-border-radius-small);
      &:hover,
      &.active {
          border: 1px solid var(--color-primary);
      }
      .layout-mode-style-name {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary-sub-5);
          border-radius: 50%;
          height: 50px;
          width: 50px;
          border: 1px solid var(--color-primary-sub-4);
      }
      .layout-mode-style-box {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
      }
      &.default {
          display: flex;
          align-items: center;
          justify-content: center;
          .layout-mode-style-aside {
              width: 18%;
              height: 90%;
              background-color: var(--color-sub-3);
          }
          .layout-mode-style-container-box {
              width: 68%;
              height: 90%;
              margin-left: 4%;
              .layout-mode-style-header {
                  width: 100%;
                  height: 10%;
                  background-color: var(--color-sub-3);
              }
              .layout-mode-style-container {
                  width: 100%;
                  height: 85%;
                  background-color: var(--color-sub-4);
                  margin-top: 5%;
              }
          }
      }
      &.classic {
          display: flex;
          align-items: center;
          justify-content: center;
          .layout-mode-style-aside {
              width: 18%;
              height: 100%;
              background-color: var(--color-sub-3);
          }
          .layout-mode-style-container-box {
              width: 82%;
              height: 100%;
              .layout-mode-style-header {
                  width: 100%;
                  height: 10%;
                  background-color: var(--color-sub-1);
              }
              .layout-mode-style-container {
                  width: 100%;
                  height: 90%;
                  background-color: var(--color-sub-4);
              }
          }
      }
      &.streamline {
          display: flex;
          align-items: center;
          justify-content: center;
          .layout-mode-style-container-box {
              width: 100%;
              height: 100%;
              .layout-mode-style-header {
                  width: 100%;
                  height: 10%;
                  background-color: var(--color-sub-1);
              }
              .layout-mode-style-container {
                  width: 100%;
                  height: 90%;
                  background-color: var(--color-sub-4);
              }
          }
      }
  }
  .w80 {
      width: 90%;
  }
</style>
