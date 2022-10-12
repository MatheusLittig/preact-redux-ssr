import { NextPage } from 'next'
import Image from 'next/image'
import { connect } from 'react-redux'
import { SSRInventory, asset, Inventory } from '~/containers/inventory'

/* ============================================ */
/* Fetching Initial Assets Data                 */
/* ============================================ */

export const getServerSideProps = SSRInventory.getServerSideProps(() => async () => {
  const { fetch } = asset.controller
  await fetch('weapons', 5)
  return {
    props: {}
  }
})

/* ============================================ */
/* Page Rendering                               */
/* ============================================ */

const SSRPage: NextPage<Inventory['state']> = ({ asset }) => {
  return (
    <div>
      <ul style={{ display: 'flex', gap: 5, flexWrap: 'wrap', listStyle: 'none' }}>
        {asset?.list.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: 200 }}>
            <h5>{item.name}</h5>
            <p>{item.id}</p>
            <Image width={140} height={180} objectFit="cover" src={item.img} />
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ============================================ */
/* Connecting Page With Invetory Store          */
/* ============================================ */

export default connect((state: Inventory['state']) => state)(SSRPage);
