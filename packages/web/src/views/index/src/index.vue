<template>
  <div class=":uno: index :uno:">
    <h1 w-2xl text-cyan>
      Index
    </h1>
    <Cpn />
    <Cpn1 />
    <div class="i-ph-anchor-simple-thin" />
    <div class="i-mdi-alarm text-orange-400" />
    <div class="i-logos-vue text-3xl" />
    <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />
    <div class=":uno-bbb: m-2 h-10 w-20 b-(1 red solid) bg-white text-red font-bold">
      11
    </div>
    <div class=":uno-aaa: text-pink">
      666777
      {{ add('test', 'test') }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ILoginUserParams } from '@vue_nest_project/shared/types'
import { add } from '@vue_nest_project/shared/utils'

const a: ILoginUserParams = {
  code: '123',
  password: '123',
  username: '123',
}
</script>

<style lang="less" scoped>
.index {
  --uno: text-black select-none;
  --uno-apply: text-20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
