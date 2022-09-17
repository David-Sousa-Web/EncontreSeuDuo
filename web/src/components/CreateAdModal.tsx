import { Input } from './form/Input'
import * as Dialog from '@radix-ui/react-dialog'
import { GameController } from 'phosphor-react'
import * as CheckBox from '@radix-ui/react-checkbox'

export function CreateAdModal() {
  return (
    <Dialog.Portal>
        <Dialog.Overlay className='bg-black/40 inset-0 fixed'/>

        <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-lg shadow-black/25'>
          <Dialog.Title className='text-3xl font-black'>Publique um Anúncio</Dialog.Title> 

          <form className='mt-8 flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <label htmlFor='game' className='font-semibold'>Qual o Game?</label>
              <Input id='name' placeholder='selecione o game que deseja'/>
            </div>

            <div className='flex flex-col gap-2'>
              <label htmlFor='name'>Seu Nome(ou NickName)</label>
              <Input id='name' placeholder='Nick dentro do jogo' />
            </div>

            <div className='grid grid-cols-2 gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                <Input id='yearsPlaying' type="number" placeholder='Tudo bem ser 0'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="discord">Qual seu discord</label>
                <Input id='discord' type="text" placeholder='ex: asdasddsa#0000' />
              </div>
            </div>

            <div className='flex gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="weekDays">Quando costuma jogar?</label>
                <div className='grid grid-cols-4 gap-1'>
                  <button
                    className='w-8 h-8 rounded bg-zinc-900' 
                    title='Domingo'>
                    D
                  </button>
                  <button
                    className='w-8 h-8 rounded bg-zinc-900' 
                    title='Segunda'>
                    S
                  </button>
                  <button
                    className='w-8 h-8 rounded bg-zinc-900' 
                    title='Terça'>
                    T
                  </button>
                  <button
                    className='w-8 h-8 rounded bg-zinc-900' 
                    title='Quarta'>
                    Q
                  </button>
                  <button
                    className='w-8 h-8 rounded bg-zinc-900' 
                    title='Quinta'>
                    Q
                  </button>
                  <button
                    className='w-8 h-8 rounded bg-zinc-900' 
                    title='Sexta'>
                    S
                  </button>
                  <button
                    className='w-8 h-8 rounded bg-zinc-900' 
                    title='Sábado'>
                    S
                  </button>
                </div>
              </div>
              <div className='flex flex-col gap-2 flex-1'>
                <label htmlFor="hourStart">Qual horário do dia?</label>
                <div className='grid grid-cols-2 gap-2'>
                  <Input id='hourStart' type="time" placeholder='de' />
                  <Input id="hourEnd" type="time" placeholder='até'/>
                </div>
              </div>
            </div>

            <div className='mt-2 flex gap-2 text-sm'>
              <CheckBox.Root className='w-6 h-6 rounded bg-zinc-900'>
                <CheckBox.Indicator />
              </CheckBox.Root>
              Costumo me conectar ao chat de voz
            </div>

            <footer className='mt-4 flex justify-end gap-4'>
              <Dialog.Close 
                className='bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600'
              >
                Cancelar
              </Dialog.Close>
                <button
                  className='bg-violet-500 px-5 h-12 rounded-md font-semibold flex items-center gap-3 hover:bg-violet-600' 
                  type='submit'>
                  <GameController size={24}/>
                  Encontre seu duo
                </button>
            </footer>
          </form> 
        </Dialog.Content>
    </Dialog.Portal>
  )
}

