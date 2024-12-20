<template>
  <div class=":uno: index :uno:">
    <h1 w-2xl text-cyan>
      Index
    </h1>
    <Cpn />
    <Cpn1 />
    <p v-for="item in user" :key="item.id">
      {{ item.username }}
      <button @click="delUser(item.id)">
        删除
      </button>
    </p>
    <button @click="addUser">
      添加用户
    </button>
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
import { IUser } from '@vue_nest_project/shared/types/user'
import { add } from '@vue_nest_project/shared/utils'
import { createUser, deleteUser, getUserAll } from '~/api/app'

const user = ref<IUser[]>([])

async function getUser() {
  const res = await getUserAll()
  user.value = res.data
}

async function addUser() {
  const res = await createUser({
    username: Math.random().toString(36).substring(2, 15),
    password: Math.random().toString(36).substring(2, 15),
  })
  console.log(res)
  getUser()
}

async function delUser(id: IUser['id']) {
  const res = await deleteUser(id)
  console.log(res)
  getUser()
}

onMounted(getUser)
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
