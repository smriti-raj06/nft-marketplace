import { Paper, Typography } from '@mui/material'
import Link from "next/link"

export default function LowOnBalanceTip () {
  return (
    <Paper
      elevation={3}
      square
      sx={{
        p: '5px 15px'
      }}>
      {/* <Typography variant="body2" color="text.secondary">
        Low on MATIC? Use this 
        <Link href='https://cloud.google.com/application/web3/faucet/ethereum/sepolia' target="_blank ">faucet</Link> 
        to get free test tokens!
      </Typography> */}
    </Paper>
  )
}
