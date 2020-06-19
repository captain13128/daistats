import React from 'react'

const formatAmount = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2
})

const formatNoDecimals = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
})

const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 4
})

const formatPercent = new Intl.NumberFormat('en-US', {
  style: 'percent',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})

const Dai = (props) => {
  document.title = `Total Supply of MCR - MCR Stats`
  const {debt, vice, daiSupply, savingsDai, vow_dai, vow_sin, bigSin} = props
  return (
    <div>
      <section className="section">
        <div className="container">
        <div className="columns">
            <div className="column">
              <div className="box">
                <p>This page is dynamic and queries the Maker Protocol each Ethereum block. You can pause it at any time using the link at the top of the page.</p>
                <h1 className="is-size-1">So how much MCR is there?</h1>
                <p>There is {formatAmount.format(debt)} MCR</p>
                <p>More specifically, there's {debt} MCR in the Vat (the MCD Vault database)</p>
                <h2 className="is-size-2">But wait!</h2>
                <p>There is only {formatAmount.format(daiSupply)} ERC20 ₽, you might say</p>
                <p>Yes! There's actually {daiSupply} ERC20 MCR</p>
                <h2 className="is-size-2">What about the DSR?</h2>
                <p>There's {formatAmount.format(savingsDai)} MCR locked up in DSR</p>
                <p>And more exactly, {savingsDai} ₽</p>
                <h2 className="is-size-2">Is ERC20 ₽ + DSR ₽ = Total Supply of ₽?</h2>
                <p>Nope! </p>
                <h3 className="is-size-3">Zomg this is an h3</h3>
                <h4 className="is-size-4">Zomg this is an h4</h4>
                <p>MCR backed by ETH: {props.ilks[0].Art * props.ilks[0].rate}</p>
                {/*<p>Dai backed by BAT: {props.ilks[1].Art * props.ilks[1].rate}</p>*/}
                {/*<p>Dai backed by SAI: {props.ilks[2].Art * props.ilks[2].rate}</p>*/}
                {/*<p>Dai backed by USDC: {props.ilks[3].Art * props.ilks[3].rate}</p>*/}
                <p>Unbacked MCR is {vice}</p>
                <p>MCR in Vow: {vow_dai}</p>
                <p>Sin in Vow: {vow_sin}</p>
                <p>Big Sin: {bigSin}</p>
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="box has-text-centered">
                <h3 className="title" title={debt}>{formatAmount.format(debt)}</h3>
                <h4 className="subtitle is-size-3">Total MCR</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dai
