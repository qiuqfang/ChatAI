import { Show } from "solid-js";
import type { Accessor, Setter } from "solid-js";
import IconEnv from "@/components/icons/Env";
import { systemRole } from "./constans";

interface Props {
  canEdit: Accessor<boolean>;
  systemRoleEditing: Accessor<boolean>;
  setSystemRoleEditing: Setter<boolean>;
  currentSystemRoleSettings: Accessor<string>;
  setCurrentSystemRoleSettings: Setter<string>;
}

export default (props: Props) => {
  let systemInputRef: HTMLTextAreaElement;

  const handleButtonClick = () => {
    props.setCurrentSystemRoleSettings(systemInputRef.value);
    props.setSystemRoleEditing(false);
  };

  return (
    <div class="my-4">
      <Show when={!props.systemRoleEditing()}>
        <Show when={props.currentSystemRoleSettings()}>
          <div class="text-slate">
            <div class="flex items-center gap-1 op-60 text-slate">
              <IconEnv />
              <span>预设角色:</span>
            </div>
            <div class="m-2">{props.currentSystemRoleSettings()}</div>
          </div>
        </Show>
        <Show when={!props.currentSystemRoleSettings() && props.canEdit()}>
          <span
            onClick={() =>
              props.setSystemRoleEditing(!props.systemRoleEditing())
            }
            class="inline-flex items-center justify-center gap-1 text-sm text-slate bg-slate/20 px-2 py-1 rounded-md transition-colors cursor-pointer hover:bg-slate/50"
          >
            <IconEnv />
            <span>预设角色</span>
          </span>
        </Show>
      </Show>

      <Show when={props.systemRoleEditing() && props.canEdit()}>
        <div>
          <div class="flex items-center gap-1 op-60 text-slate">
            <IconEnv />
            <span>预设角色:</span>
          </div>
          <p class="m-2 leading-normal text-slate text-sm op-60">
            给你的助手添加'人'设, 它将更好为您服务
          </p>
          <div class="flex flex-wrap">
            {systemRole.map((role) => (
              <span
                onClick={() => {
                  systemInputRef.value = role.value;
                }}
                class="m-x-2 m-y-1 text-sm text-slate bg-slate/20 px-2 py-1 rounded-md transition-colors cursor-pointer hover:bg-slate/50"
              >
                {role.name}
              </span>
            ))}
          </div>
          <div>
            <textarea
              ref={systemInputRef!}
              placeholder="我想让你充当英文翻译员,拼写纠正员和改进员, 不要回答我的提问, 仅翻译纠正和改进我说的话即可"
              autocomplete="off"
              autofocus
              rows="3"
              w-full
              px-3
              py-3
              my-1
              min-h-12
              max-h-36
              text-slate
              rounded-sm
              bg-slate
              bg-op-15
              focus:bg-op-20
              focus:ring-0
              focus:outline-none
              placeholder:text-slate-400
              placeholder:op-30
              resize-none
              scroll-pa-8px
            />
          </div>
          <button
            onClick={handleButtonClick}
            h-12
            px-4
            py-2
            bg-slate
            bg-op-15
            hover:bg-op-20
            text-slate
            rounded-sm
          >
            确定
          </button>
        </div>
      </Show>
    </div>
  );
};
